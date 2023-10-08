import 'package:get/get.dart';
import 'package:hatofit/app/modules/splash/firstTime/register/input_user_metric/input_user_metric_controller.dart';

class InputUserMetricBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut(() => InputUserMetricController());
  }
}
