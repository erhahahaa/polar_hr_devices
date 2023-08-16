import 'package:circular_countdown_timer/circular_countdown_timer.dart';
import 'package:get/get.dart';

import '../../../../app/routes/app_routes.dart';
import '../../../../app/services/polar_service.dart';
import '../../../../data/models/exercise.dart';

class WorkoutStartController extends GetxController {
  final workout = Get.arguments as Exercise;

  final nowInstruction = 0.obs;
  final countDownTimer = CountDownController().obs;
  final isPause = false.obs;
  final isNowExerciseFinish = false.obs;
  final isAllExerciseFinish = false.obs;

  final PolarService _polarService = Get.find<PolarService>();

  void nextInstruction(totalInstruction) {
    if (nowInstruction.value + 1 >= totalInstruction) {
      countDownTimer.value.reset();
      _polarService.isStartWorkout.value = false;
      isAllExerciseFinish.value = true;
      Get.offNamed(AppRoutes.dashboard);
    }
    if ((nowInstruction.value + 1) < totalInstruction) {
      countDownTimer.value.restart(
          duration: workout.instructions[nowInstruction.value].duration);
      isNowExerciseFinish.value = false;
      nowInstruction.value++;
    }
  }

  @override
  void onInit() {
    _polarService.isStartWorkout.value = true;
    _polarService.starWorkout(workout.id, workout.duration, 'EMPTY');
    super.onInit();
  }
}
