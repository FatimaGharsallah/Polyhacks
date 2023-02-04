import 'package:flutter/material.dart';
import 'package:get/get.dart';

class Jour extends StatefulWidget {
  const Jour({Key? key}) : super(key: key);

  @override
  State<Jour> createState() => _JourState();
}

class _JourState extends State<Jour> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
          child: Column(
            children: [
              Expanded(
                flex: 2,
                child: Container(
                  color: Colors.green,
                ),
              ),
              Expanded(
                flex: 6,
                child: Container(
                  color: Colors.blue,
                ),
              ),
              Expanded(
                flex: 1,
                child: Container(
                  color: Colors.red,
                ),
              )
            ],
          ),
      ),
    );
  }
}


