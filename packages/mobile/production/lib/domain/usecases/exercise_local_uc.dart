import 'package:dartz/dartz.dart';
import 'package:hatofit/app/core/usecases/no_param_uc.dart';
import 'package:hatofit/domain/repositories/exercise_repo_abs.dart';

import '../../app/core/domain/failure.dart';
import '../../app/core/domain/success.dart';

class ExerciseLocalUC extends NoParamUseCase {
  final ExerciseRepoAbs _exerciseRepoAbs;
  ExerciseLocalUC(this._exerciseRepoAbs);
  @override
  Future<Either<Failure, Success>> execute() {
    return _exerciseRepoAbs.localWorkouts();
  }
}
