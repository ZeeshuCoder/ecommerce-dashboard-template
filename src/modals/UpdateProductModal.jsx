import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleUpdateProductModal } from "../store/slices/extraSlice";
import { LoaderCircle } from "lucide-react";
import { updateProduct } from "../store/slices/productsSlice";

const UpdateProductModal = ({ selectedProduct }) => {
  const { loading } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    stock: "",
  });

  const categoryOptions = [
    "Electronics",
    "Fashion",
    "Home & Garden",
    "Sports",
    "Books",
    "Beauty",
    "Automotive",
    "Kids & Baby",
  ];

  useEffect(() => {
    if (selectedProduct) {
      console.log(selectedProduct);
      setFormData({
        name: selectedProduct.name || "",
        description: selectedProduct.description || "",
        price: selectedProduct.price || "",
        category: selectedProduct.category || "",
        stock: selectedProduct.stock || "",
      });
    }
  }, [selectedProduct]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: formData.name,
      description: formData.description,
      price: formData.price,
      category: formData.category,
      stock: formData.stock,
    };

    dispatch(updateProduct(data, selectedProduct.id));
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-xl w-full max-w-2xl p-6 relative">
        <button
          onClick={() => dispatch(toggleUpdateProductModal())}
          className="absolute top-4 right-4 text-gray-600 hover:text-red-500 text-xl"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center">Update Product</h2>

        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Title"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="border px-4 py-2 rounded"
          />
          <select
            className="w-full border p-2 rounded-lg"
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
            required
          >
            {categoryOptions.map((cat, idx) => (
              <option key={idx} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <input
            type="number"
            placeholder="Price"
            value={formData.price}
            onChange={(e) =>
              setFormData({ ...formData, price: e.target.value })
            }
            className="border px-4 py-2 rounded"
          />
          <input
            type="number"
            placeholder="Stock"
            value={formData.stock}
            onChange={(e) =>
              setFormData({ ...formData, stock: e.target.value })
            }
            className="border px-4 py-2 rounded"
          />

          <textarea
            placeholder="Description"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            className="border px-4 py-2 rounded col-span-1 md:col-span-2"
            rows={4}
          />

          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded col-span-1 md:col-span-2"
          >
            {loading ? (
              <>
                <LoaderCircle className="w-6 h-6 animate-spin" />
                Updating
              </>
            ) : (
              "Update Product"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProductModal;
