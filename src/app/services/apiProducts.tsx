export async function getProduct() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    //    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function getProductId(id: any) {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();
    //    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
}
export async function getProductCategory() {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/categories`);
    const data = await res.json();
    //    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
}
