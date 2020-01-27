---
id: snapshot-naming
title: Snapshot Naming
sidebar_label: Snapshot Naming
---

The name of a snapshot is its unique identifier. If two separate snapshots
have the exactly same name, then some mismatch failures will occur.
Therefore make sure, that the snapshot name is always unique in the
`__snapshot__` folder.

## Default Snapshot Name

If no snapshot name is explicitly defined in the snapshot match statement,
then Snapshooter will create per default a unique snapshot name for your
snapshot.

The default snapshot name is a composition of the test class name and
the test method name. Additionally, every snapshot file name ends with
**.snap**.

`Snapshot.Match(yourResultObject);`

> Snapshot default name: `<TestClassName>.<TestMethodName>.snap`

snippet: DefaultSnapshotName_SnapshotWithDefaultName

## Defined Snapshot Name

If you need a completely different snapshot name, you have the possibility
to overwrite the default snapshot name. The snapshot name can be defined
in the snapshot match statement.

`Snapshot.Match(yourResultObject, "MyOwnSnapshotName1");`

This will result in **MyOwnSnapshotName1.snap**

snippet: DefinedSnapshotName_SnapshotWithDefinedName

## Snapshot Name Extension

In some cases, people want to keep the default snapshot naming
`<TestClassName>.<TestMethodName>`, but they also want to be able
to add some specific values (text, id, time etc.) to the default
snapshot name.

For this case we created the snapshot name extension possibility, where
you can add values to the default snapshot name.

The type of the extension
values does not matter, it will be converted into a string and concatenated
by an underscore "\_".

`Snapshot.Match(person, SnapshotNameExtension.Create("Age", 88, "Prof"));`

Snapshot extended name: `<TestClassName>.<TestMethodName>_Age_88_Prof.snap`

snippet: SnapshotNameWithNameExtensions_SnapshotWithDefaultNameExtensions
