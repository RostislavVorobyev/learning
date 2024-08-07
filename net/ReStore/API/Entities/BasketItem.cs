using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities
{
    [Table("BasketItems")]
    public class BasketItem
    {
        public Guid Id { get; set; }

        public int Quantity { get; set; }
        public Guid ProductId { get; set; }
        public required Product Product { get; set; }

        public required Basket Basket { get; set; }
        public Guid BasketId { get; set; }
    }
}
