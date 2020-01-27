using Snapshooter.Xunit;
using System;
using Snapshooter;
using Snapshooter.Tests.Data;
using Xunit;

public class Snippets
{
    #region DefaultSnapshotName_SnapshotWithDefaultName
    [Fact]
    public void CreatePerson_DefaultSnapshotName_SnapshotWithDefaultName()
    {
        // arrange
        var serviceClient = new ServiceClient();

        // act
        var person = serviceClient.CreatePerson(
            Guid.Parse("1192F21C-8501-4771-A070-C79C7C7EF411"), "Albert", "Einstein");

        // assert

        // Snapshot name is NamingTests.CreatePerson_DefaultSnapshotName_SnapshotWithDefaultName.snap
        Snapshot.Match(person);
    }
    #endregion

    #region DefinedSnapshotName_SnapshotWithDefinedName
    [Fact]
    public void CreatePerson_DefinedSnapshotName_SnapshotWithDefinedName()
    {
        // arrange
        var serviceClient = new ServiceClient();

        // act
        var person = serviceClient.CreatePerson(
            Guid.Parse("1192F21C-8501-4771-A070-C79C7C7EF411"), "Albert", "Einstein");

        // assert

        // Snapshot name is ExplicitlyDefinedSnapshotName.snap
        Snapshot.Match(person, "ExplicitlyDefinedSnapshotName");
    }
    #endregion
    
    #region SnapshotTest
    [Fact]
    public void CreatePersonSnapshotTest()
    {
        // arrange
        var serviceClient = new ServiceClient();

        // act
        TestPerson person = serviceClient.CreatePerson(
            Guid.Parse("2292F21C-8501-4771-A070-C79C7C7EF451"), "David", "Mustermann");

        // assert
        Snapshot.Match(person);
    }
    #endregion
    
    #region SnapshotNameWithNameExtensions_SnapshotWithDefaultNameExtensions
    [Fact]
    public void CreatePerson_SnapshotNameWithNameExtensions_SnapshotWithDefaultNameExtensions()
    {
        // arrange
        var serviceClient = new ServiceClient();

        // act
        TestPerson person = serviceClient.CreatePerson(
            Guid.Parse("1192F21C-8501-4771-A070-C79C7C7EF411"), "Albert", "Einstein");

        // assert

        // Snapshot name is NamingTests.CreatePerson_SnapshotNameWithNameExtensions_SnapshotWithDefaultNameExtensions_Age_88_Prof.snap
        Snapshot.Match(person, SnapshotNameExtension.Create("Age", 88, "Prof"));
    }
    #endregion
}