import 'package:dartz/dartz.dart';
import 'package:hatofit/core/core.dart';
import 'package:hatofit/domain/domain.dart';

class VerifyCodeUseCase
    extends WithParamsUseCase<BaseResponseEntity, ResetPasswordParams> {
  final AuthRepository _repo;

  VerifyCodeUseCase(this._repo);

  @override
  Future<Either<Failure, BaseResponseEntity>> call(
          ResetPasswordParams params) =>
      _repo.verifyCode(params);
}