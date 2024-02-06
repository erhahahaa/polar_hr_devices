import 'package:dartz/dartz.dart';
import 'package:hatofit/core/core.dart';
import 'package:hatofit/domain/domain.dart';

class UpdateMoodUsecase extends WithParamsUseCase<String, String> {
  final UserRepo _userRepo;

  UpdateMoodUsecase(this._userRepo);

  @override
  Future<Either<Failure, String>> call(String params) async =>
      await _userRepo.saveTodayMood(params);
}
