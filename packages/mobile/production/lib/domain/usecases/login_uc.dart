import 'package:dartz/dartz.dart';
import 'package:flutter/material.dart';

import '../../app/core/domain/failure.dart';
import '../../app/core/domain/success.dart';
import '../../app/core/usecases/param_uc.dart';
import '../repositories/auth_repo_abs.dart';

class LoginUC extends ParamUseCase<dynamic, Tuple2<String, String>> {
  final AuthRepoAbs _authRepoAbs;
  LoginUC(this._authRepoAbs);
  @override
  Future<Either<Failure, Success>> execute(Tuple2<String, String> param) {
    return _authRepoAbs.login(param.value1, param.value2);
  }
}
