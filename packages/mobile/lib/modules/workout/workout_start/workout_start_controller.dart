import 'package:circular_countdown_timer/circular_countdown_timer.dart';
import 'package:get/get.dart';
import 'package:polar_hr_devices/models/exercise_model.dart';
import 'package:polar_hr_devices/routes/app_routes.dart';
import 'package:polar_hr_devices/services/polar_service.dart';

class WorkoutStartController extends GetxController {
  final workout = Get.arguments as ExerciseModel;

  final nowInstruction = 0.obs;
  final countDownTimer = CountDownController().obs;
  final isPause = false.obs;
  final isNowExerciseFinish = false.obs;
  final isAllExerciseFinish = false.obs;

  final PolarService _polarService = Get.find<PolarService>();

  void nextInstruction(totalInstruction) {
    if (nowInstruction.value < totalInstruction) {
      countDownTimer.value.restart(
          duration: workout.instructions[nowInstruction.value].duration);
      isNowExerciseFinish.value = false;
      nowInstruction.value++;
    }
    if (nowInstruction.value == totalInstruction) {
      _polarService.isStartWorkout.value = true;
      _polarService.streamPause();
      isAllExerciseFinish.value = true;
      Get.offNamed(AppRoutes.workout);
    }
  }

  @override
  void onInit() {
    _polarService.isStartWorkout.value = true;
    _polarService.starWorkout(workout.id, workout.duration);
    super.onInit();
  }

  @override
  void onClose() {
    _polarService.isStartWorkout.value = false;
    _polarService.streamPause();
    super.onClose();
  }
}
