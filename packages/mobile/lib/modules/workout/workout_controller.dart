import 'dart:convert';
import 'dart:io';

import 'package:get/get.dart';
import 'package:path_provider/path_provider.dart';
import 'package:polar_hr_devices/models/exercise_model.dart';
import 'package:polar_hr_devices/routes/app_routes.dart';

class WorkoutController extends GetxController {
  final String title = 'Workout';
  final _getConnect = GetConnect();
  List<ExerciseModel> todayGoalWorkouts = [];
  final isDarkMode = Get.isDarkMode;

  @override
  void onClose() {
    _getConnect.dispose();
    super.onClose();
  }



  goToWorkoutDetail(ExerciseModel exercise) {
    Get.toNamed(AppRoutes.workoutDetail, arguments: exercise);
  }
}

Future<void> saveExercise(List<dynamic> response) async {
  String jsonString = jsonEncode(response);
  final Directory? directory = await getExternalStorageDirectory();
  final File file = File('${directory?.path}/exercise.json');
  await file.writeAsString(jsonString);
}
