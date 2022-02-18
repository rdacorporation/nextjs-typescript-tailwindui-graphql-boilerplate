namespace GraphQL;

using GraphQL.Models;

public class Query
{
  public Book GetBook() =>
      new()
      {
        Title = "C# in depth.",
        Author = new Author
        {
          Name = "Jon Skeet"
        }
      };
}
