namespace API.Entities
{
    public class Basket
    {
        public Guid Id { get; set; }

        public Guid BuyerId { get; set; }

        public List<BasketItem> Items { get; set; } = [];

        public void AddProduct(Product product, int quantity)
        {
            var productInCart = Items.FirstOrDefault(p => p.ProductId == product.Id);

            if (productInCart is not null)
            {
                productInCart.Quantity += quantity;
            }
            else
            {
                Items.Add(new BasketItem { Product = product, Quantity = quantity, Basket = this, BasketId = Id });
            }

        }

        public void RemoveProduct(Guid id, int quantity)
        {
            var product = Items.FirstOrDefault(p => p.ProductId == id);

            if (product is not null)
            {
                product.Quantity -= quantity;

                if (product.Quantity == 0)
                    Items.Remove(product);
            }
        }
    }
}
