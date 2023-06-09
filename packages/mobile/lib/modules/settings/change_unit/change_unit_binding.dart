import 'package:get/get.dart';
import 'package:polar_hr_devices/modules/settings/change_unit/change_unit_controller.dart';

class ChangeUnitBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut<ChangeUnitController>(() => ChangeUnitController());
  }
}