import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:go_router/go_router.dart';
import 'package:hatofit/core/core.dart';
import 'package:hatofit/ui/ui.dart';
import 'package:hatofit/utils/ext/context.dart';

class SplashScreenPage extends StatefulWidget {
  const SplashScreenPage({super.key});

  @override
  State<SplashScreenPage> createState() => _SplashScreenPageState();
}

class _SplashScreenPageState extends State<SplashScreenPage> {
  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);

    return Parent(
      child: BlocListener<SplashCubit, SplashState>(
        listener: (context, state) {
          state.whenOrNull(
            initial: null,
            authorized: (message) {
              context.goNamed(Routes.root.name);
            },
            unauthorized: (message) {
              context.goNamed(Routes.login.name);
            },
          );
        },
        child: ColoredBox(
          color: theme.extension<AppColors>()!.background!,
          child: Center(
            child: Image.asset(
              context.isDarkMode
                  ? 'assets/images/logo/dark.png'
                  : 'assets/images/logo/light.png',
            ),
          ),
        ),
      ),
    );
  }
}
