import 'package:dartz/dartz.dart';
import 'package:hatofit/core/core.dart';
import 'package:hatofit/domain/domain.dart';

class MeUseCase extends NoParamsUseCase<AuthResponseEntity> {
  final AuthRepository _repo;

  MeUseCase(this._repo);

  @override
  Future<Either<Failure, AuthResponseEntity>> call() => _repo.me();
}