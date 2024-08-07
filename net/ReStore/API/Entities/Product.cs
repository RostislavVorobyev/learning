namespace API.Entities
{
    public class Product
    {
        public Guid Id { get; init; }
        public string? Name { get; init; }
        public string? Description { get; init; }
        public long Price { get; init; }
        public string? PictureUrl { get; init; }
        public string? Type { get; init; }
        public string? Brand { get; init; }
        public int QuantityInStock { get; init; }
    }
}