import 'package:get/get.dart';

class DashboardController extends GetxController {
  final double screenHeight = Get.height;
  final double screenWidth = Get.width;
  var tabIndex = 2;

  void changeTabIndex(int index) {
    tabIndex = index;

    update();
  }
}
