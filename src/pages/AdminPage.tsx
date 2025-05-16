import { useState, useEffect } from 'react';
import { Trash2, Plus, Edit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/use-toast';
import { fetchProducts, createProduct, deleteProduct } from '../services/api';
import { Product } from '@/interfaces/product';

const AdminPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: 0,
    description: '',
    category: '',
    stock: 0,
    images: ['', '', '', '', '', ''],
    includes: [''],
    fabrics: '',
    fitFinish: '',
    care: ''
  });

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const { data } = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error loading products:', error);
        toast({
          title: "Error",
          description: "Failed to load products",
          variant: "destructive"
        });
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data } = await createProduct(newProduct);
      setProducts([...products, data]);
      setNewProduct({
        name: '',
        price: 0,
        description: '',
        category: '',
        stock: 0,
        images: ['', '', '', '', '', ''],
        includes: [''],
        fabrics: '',
        fitFinish: '',
        care: ''
      });
      toast({
        title: "Success",
        description: "Product added successfully",
      });
    } catch (error) {
      console.error('Error creating product:', error);
      toast({
        title: "Error",
        description: "Failed to create product",
        variant: "destructive"
      });
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteProduct(id);
      setProducts(products.filter(product => product._id !== id));
      toast({
        title: "Success",
        description: "Product deleted successfully",
      });
    } catch (error) {
      console.error('Error deleting product:', error);
      toast({
        title: "Error",
        description: "Failed to delete product",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="py-16 min-h-screen bg-jj-beige/30">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h1 className="section-title">Admin Dashboard</h1>
          <p className="text-jj-brown mt-4 max-w-2xl mx-auto">
            Manage your products and inventory with our elegant dashboard
          </p>
        </div>
        
        {/* Add Product Form */}
        <div className="mb-16 p-8 bg-white rounded-md shadow-sm border border-jj-cream">
          <h2 className="text-2xl font-serif mb-6 text-jj-darkbrown">Add New Product</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-jj-brown">Product Name</Label>
                <Input
                  id="name"
                  placeholder="Elegant Wedding Gown"
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                  className="border-jj-cream/70 focus-visible:ring-jj-cream"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="price" className="text-jj-brown">Price ($)</Label>
                <Input
                  id="price"
                  type="number"
                  placeholder="1299"
                  value={newProduct.price || ''}
                  onChange={(e) => setNewProduct({...newProduct, price: Number(e.target.value)})}
                  className="border-jj-cream/70 focus-visible:ring-jj-cream"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="category" className="text-jj-brown">Category</Label>
                <Input
                  id="category"
                  placeholder="Wedding, Accessories, etc."
                  value={newProduct.category}
                  onChange={(e) => setNewProduct({...newProduct, category: e.target.value})}
                  className="border-jj-cream/70 focus-visible:ring-jj-cream"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="stock" className="text-jj-brown">Stock</Label>
                <Input
                  id="stock"
                  type="number"
                  placeholder="5"
                  value={newProduct.stock || ''}
                  onChange={(e) => setNewProduct({...newProduct, stock: Number(e.target.value)})}
                  className="border-jj-cream/70 focus-visible:ring-jj-cream"
                  required
                />
              </div>
              
              <div className="space-y-2 md:col-span-2">
                <Label className="text-jj-brown">Product Images (6 required)</Label>
                <div className="grid grid-cols-2 gap-4">
                  {[0,1,2,3,4,5].map((index) => (
                    <Input
                      key={index}
                      value={newProduct.images[index]}
                      onChange={(e) => {
                        const newImages = [...newProduct.images];
                        newImages[index] = e.target.value;
                        setNewProduct({...newProduct, images: newImages});
                      }}
                      placeholder={`Image URL ${index+1}`}
                      required
                    />
                  ))}
                </div>
              </div>
              
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="description" className="text-jj-brown">Description</Label>
                <textarea
                  id="description"
                  rows={3}
                  placeholder="Describe your product in detail..."
                  value={newProduct.description}
                  onChange={(e) => setNewProduct({...newProduct, description: e.target.value})}
                  className="w-full rounded-md border border-jj-cream/70 bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jj-cream focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  required
                />
              </div>
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label className="text-jj-brown">Includes</Label>
              {newProduct.includes.map((item, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <Input
                    value={item}
                    onChange={(e) => {
                      const newIncludes = [...newProduct.includes];
                      newIncludes[index] = e.target.value;
                      setNewProduct({...newProduct, includes: newIncludes});
                    }}
                    placeholder={`Include ${index+1}`}
                    required
                  />
                  <Button
                    type="button"
                    onClick={() => setNewProduct({
                      ...newProduct,
                      includes: newProduct.includes.filter((_, i) => i !== index)
                    })}
                    variant="destructive"
                  >
                    <Trash2 size={16} />
                  </Button>
                </div>
              ))}
              <Button
                type="button"
                onClick={() => setNewProduct({
                  ...newProduct,
                  includes: [...newProduct.includes, '']
                })}
                className="mt-2"
              >
                <Plus size={16} /> Add Include
              </Button>
            </div>

            <div className="space-y-2">
              <Label htmlFor="fabrics" className="text-jj-brown">Fabrics</Label>
              <textarea
                id="fabrics"
                value={newProduct.fabrics}
                onChange={(e) => setNewProduct({...newProduct, fabrics: e.target.value})}
                className="w-full rounded-md border border-jj-cream/70 bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jj-cream focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="fitFinish" className="text-jj-brown">Fit & Finish</Label>
              <textarea
                id="fitFinish"
                value={newProduct.fitFinish}
                onChange={(e) => setNewProduct({...newProduct, fitFinish: e.target.value})}
                className="w-full rounded-md border border-jj-cream/70 bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jj-cream focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="care" className="text-jj-brown">Care</Label>
              <textarea
                id="care"
                value={newProduct.care}
                onChange={(e) => setNewProduct({...newProduct, care: e.target.value})}
                className="w-full rounded-md border border-jj-cream/70 bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jj-cream focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                required
              />
            </div>

            
            <div className="flex justify-end">
              <Button 
                type="submit" 
                className="btn-primary flex items-center gap-2 hover:bg-jj-cream hover:text-jj-darkbrown transition-all duration-300"
              >
                <Plus size={16} /> Add Product
              </Button>
            </div>
          </form>
        </div>

        {/* Product List */}
        <div className="bg-white rounded-md shadow-sm border border-jj-cream p-8">
          <h2 className="text-2xl font-serif mb-6 text-jj-darkbrown">Products</h2>
          
          {loading ? (
            <div className="text-center py-8">
              <p className="text-jj-brown">Loading products...</p>
            </div>
          ) : products.length === 0 ? (
            <div className="text-center py-8 border border-dashed border-jj-cream/70 rounded-md">
              <p className="text-jj-brown/70 italic">No products available</p>
            </div>
          ) : (
            <div className="space-y-4">
              {products.map(product => (
                <div 
                  key={product._id} 
                  className="p-4 border border-jj-cream/30 rounded-md flex flex-col md:flex-row gap-4 items-center hover:bg-jj-beige/10 transition-colors"
                >
                  <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                    <img 
                      src={product.images ? product.images[0] : ''}
                      alt={product.name} 
                      className="w-full h-full object-cover"
                      // onError={(e) => {
                      //   const target = e.target as HTMLImageElement;
                      //   target.src = 'https://via.placeholder.com/80?text=No+Image';
                      // }}
                    />
                  </div>
                  
                  <div className="flex-grow text-center md:text-left">
                    <h3 className="font-serif text-lg text-jj-darkbrown">{product.name}</h3>
                    <p className="text-jj-brown/80 text-sm">{product.category}</p>
                    <p className="text-jj-brown font-medium">${product.price.toFixed(2)}</p>
                    <p className="text-sm text-jj-brown/70 mt-1">Stock: {product.stock}</p>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="border-jj-cream/50 hover:bg-jj-cream/20 hover:text-jj-darkbrown"
                    >
                      <Edit size={16} />
                    </Button>
                    <Button 
                      variant="outline"
                      size="sm" 
                      className="border-jj-cream/50 hover:bg-red-50 hover:text-red-600 hover:border-red-200"
                      onClick={() => handleDelete(product._id)}
                    >
                      <Trash2 size={16} />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;