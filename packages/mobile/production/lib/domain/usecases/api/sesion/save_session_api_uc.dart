import 'package:dartz/dartz.dart';
import 'package:hatofit/app/core/domain/failure.dart';
import 'package:hatofit/app/core/domain/success.dart';
import 'package:hatofit/app/core/usecases/param_uc.dart';
import 'package:hatofit/data/models/session.dart';
import 'package:hatofit/domain/repos/session_repo_abs.dart';

class SaveSessionApiUc
    extends ParamUseCase<Either<Failure, Success>, Tuple2<Session, String>> {
  final SessionRepoAbs _sessionRepoAbs;
  SaveSessionApiUc(this._sessionRepoAbs);

  @override
  Future<Either<Failure, Success>> execute(
    Tuple2<Session, String> param,
  ) async {
    return await _sessionRepoAbs.saveSessionApi(param.value1, param.value2);
  }
}