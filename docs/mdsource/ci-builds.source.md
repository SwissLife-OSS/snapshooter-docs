---
id: ci-builds
title: Snapshooter on CI-Builds
sidebar_label: CI-Builds
---

Snapshooter is nice and convenient in the way that it creates snapshots automatically on the first run of your tests.

This is a feature and makes your live easier.

But once in a while you might forget to commit your snapshot and by default those snapshots will create the initial snapshot on the next run and become green.

This means that on the CI-Server we will now have always a green test even if the tested functionality produces a wrong result.

This is where strict mode comes in. With strict mode we will fail tests and create a mismatch whenever a snapshot is missing.

This behavior is ideal on your build servers.

In order to enable strict mode set the environment variable `SNAPSHOOTER_STRICT_MODE` to `on` or `true`. If this environment variable is set we will fail all tests that are missing its snapshot.

Since, we are also producing a mismatch snapshot file in strict mode you can also opt to run snapshooter in strict mode on your dev box and force yourself to review and move the snapshot file to the accepted folder explicitly.

