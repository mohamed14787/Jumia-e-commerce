import {
  Button,
  Checkbox,
  FileInput,
  Label,
  Radio,
  RangeSlider,
  Select,
  Textarea,
  TextInput,
  ToggleSwitch,
} from "flowbite-react";
import axios from "axios";

function AddProductPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const description = event.target.description.value;
    const stock = event.target.stock.value;
    const price = event.target.price.value;
    const categoryId = event.target.categoryId.value;
    const productId = event.target.productId.value;

    axios
      .post("http://localhost:9090/api/admin/products", {
        name: name,
        description: description,
        stock: stock,
        price: price,
        categoryId: categoryId,
        productId: productId,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(`http://localhost:9090/api/public/categories/${categoryId}`)
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="name" value="name" />
        </div>
        <TextInput id="name" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="description" value="description" />
        </div>
        <TextInput id="description" required />
      </div>

      <div>
        <div className="mb-2 block">
          <Label htmlFor="stock" value="stock" />
        </div>
        <TextInput id="stock" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="price" value="price" />
        </div>
        <TextInput id="price" type="price" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="categoryId" value="categoryId" />
        </div>
        <TextInput id="categoryId" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="productId" value="productId" />
        </div>
        <TextInput id="productId" required />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Remember me</Label>
        <Button type="submit" color="black">
          Submit
        </Button>
      </div>
    </form>
  );
}

export default AddProductPage;
