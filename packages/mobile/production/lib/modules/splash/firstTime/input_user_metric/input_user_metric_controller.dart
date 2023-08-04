import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:permission_handler/permission_handler.dart';
import 'package:polar_hr_devices/models/auth_model.dart';
import 'package:polar_hr_devices/services/internet_service.dart';
import 'package:polar_hr_devices/services/polar_service.dart';
import 'package:polar_hr_devices/services/storage_service.dart';
import 'package:polar_hr_devices/themes/app_theme.dart';

import '../../../../routes/app_routes.dart';

class InputUserMetricController extends GetxController {
  final AuthModel previousData = Get.arguments;

  final selectedHeightUnitMeasure = ''.obs;
  final selectedWeightUnitMeasure = ''.obs;
  final userWeight = 100.obs;
  final userHeight = 150.obs;
  final isUserWeightSelected = false.obs;
  final isUserHeightSelected = false.obs;

  final storage = StorageService().storage;
  void selectHeightUnitMeasure(String unitMeasure) {
    selectedHeightUnitMeasure.value = unitMeasure;
    isUserHeightSelected.value = true;
  }

  void selectWeightUnitMeasure(String unitMeasure) {
    selectedWeightUnitMeasure.value = unitMeasure;
    isUserWeightSelected.value = true;
  }

  void saveUserInfo() {
    previousData.height = userHeight.value;
    previousData.weight = userWeight.value;
    previousData.metricUnits = MetricUnits(
      energyUnits: 'Kcal',
      heightUnits: selectedHeightUnitMeasure.value,
      weightUnits: selectedWeightUnitMeasure.value,
    );
    requestPermission();
  }

  void requestPermission() {
    Get.defaultDialog(
      title: 'Permission',
      middleText:
          'Please allow all needed permissions to use this app perfectly',
      textConfirm: 'ALLOW',
      confirmTextColor: Colors.black,
      buttonColor: Colors.greenAccent,
      titleStyle: TextStyle(
          fontFamily: 'Poppins',
          fontSize: 24,
          color: ThemeManager().isDarkMode ? Colors.white : Colors.black),
      onConfirm: () {
        PolarService().polar.requestPermissions().then((value) => Permission
            .location
            .request()
            .then((value) => Permission.storage.request().then((value) async {
                  if (value.isGranted) {
                    final Response response =
                        await InternetService().registerUser(previousData);

                    if (response.body['success'] == true) {
                      final response =
                          await InternetService().loginUser(previousData);

                      if (response.body['success'] == true) {
                        final body = response.body;
                        final AuthModel authModel =
                            AuthModel.fromJson(body['user']);
                        print("===***===\n"
                            "$body\n"
                            "${authModel.firstName} ${authModel.lastName}\n"
                            "===***===");
                        storage.write('userToken', body['token']);
                        storage.write('fullName',
                            '${authModel.firstName} ${authModel.lastName}');
                        storage.write('email', authModel.email);
                        storage.write('gender', authModel.gender);
                        storage.write('dateOfBirth', authModel.dateOfBirth);
                        storage.write('height', authModel.height);
                        storage.write('weight', authModel.weight);
                        storage.write('metricUnits', authModel.metricUnits);
                        storage.write('createdAt', authModel.createdAt);
                        storage.write('updatedAt', authModel.updatedAt);
                        storage.write('id', authModel.id);
                        Get.snackbar(
                          'Success',
                          'User registered successfully',
                          backgroundColor: Colors.green,
                          colorText: Colors.white,
                        );

                        Get.offAllNamed(AppRoutes.dashboard);
                      } else {
                        Get.snackbar(
                          'Error Login',
                          response.body['message'],
                          backgroundColor: Colors.red,
                          colorText: Colors.white,
                        );
                      }
                    } else {
                      Get.snackbar(
                        'Error Register',
                        response.body['message'],
                        backgroundColor: Colors.red,
                        colorText: Colors.white,
                      );
                    }
                  } else {
                    requestPermission();
                  }
                })));

        update();
      },
    );
  }
}
