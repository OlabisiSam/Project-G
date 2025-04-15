import { useParams } from "react-router-dom"
import { Card, CardContent } from "./ui/Card"
import { Button } from "./ui/Button"
import { Checkbox } from "./ui/Checkbox"
import { Label } from "./ui/Label"
import { Slider } from "./ui/Slider"
import { Badge } from "./ui/Badge"
import FilterSidebar from "./FilterSidebar";
import { FiFilter } from "react-icons/fi"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/Sheet"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/Select"

const categoryData = {
  textbooks: {
    title: "Textbooks",
    description: "Find affordable textbooks for your courses",
    items: [
      { id: 1, title: "Calculus: Early Transcendentals", price: 45, condition: "Like New" },
      { id: 2, title: "Introduction to Psychology", price: 30, condition: "Good" },
      { id: 3, title: "Organic Chemistry", price: 55, condition: "Excellent" },
      { id: 4, title: "World History", price: 25, condition: "Fair" },
      { id: 5, title: "Physics for Scientists and Engineers", price: 50, condition: "Like New" },
      { id: 6, title: "Introduction to Computer Science", price: 40, condition: "Good" },
    ],
  },
  furniture: {
    title: "Furniture",
    description: "Furnish your dorm or apartment with affordable options",
    items: [
      { id: 1, title: "Desk Lamp", price: 15, condition: "Good" },
      { id: 2, title: "Desk Chair", price: 45, condition: "Excellent" },
      { id: 3, title: "Bookshelf", price: 35, condition: "Good" },
      { id: 4, title: "Futon", price: 85, condition: "Like New" },
      { id: 5, title: "Coffee Table", price: 30, condition: "Fair" },
      { id: 6, title: "Bedside Table", price: 25, condition: "Good" },
    ],
  },
  electronics: {
    title: "Electronics",
    description: "Find deals on calculators, laptops, and other tech essentials",
    items: [
      { id: 1, title: "TI-84 Calculator", price: 60, condition: "Excellent" },
      { id: 2, title: "Wireless Headphones", price: 45, condition: "Like New" },
      { id: 3, title: "Bluetooth Speaker", price: 30, condition: "Good" },
      { id: 4, title: "Laptop Cooling Pad", price: 15, condition: "Fair" },
      { id: 5, title: "External Hard Drive", price: 40, condition: "Excellent" },
      { id: 6, title: "Wireless Mouse", price: 20, condition: "Good" },
    ],
  },
  other: {
    title: "Other Items",
    description: "Browse miscellaneous items for campus life",
    items: [
      { id: 1, title: "Backpack", price: 35, condition: "Good" },
      { id: 2, title: "Bike", price: 120, condition: "Excellent" },
      { id: 3, title: "Mini Fridge", price: 75, condition: "Good" },
      { id: 4, title: "Microwave", price: 50, condition: "Fair" },
      { id: 5, title: "Desk Organizer", price: 15, condition: "Like New" },
      { id: 6, title: "Laundry Hamper", price: 10, condition: "Good" },
    ],
  },
}

export default function Category() {
  const { category } = useParams()
  const data = categoryData[category] || categoryData.other

  return (
    <div className="flex flex-col">
      <section className="bg-[#F0F4F8] py-8 md:py-12">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tight text-[#2D3748] md:text-5xl">{data.title}</h1>
          <p className="text-muted-foreground md:text-xl">{data.description}</p>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-8 md:flex-row">
            <div className="hidden w-[240px] shrink-0 md:block">
              <div className="sticky top-20 space-y-6">
                <div>
                  <h3 className="mb-4 text-lg font-semibold">Filters</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="mb-2 font-medium">Condition</h4>
                      <FilterSidebar/>
                      {/* {['Like New', 'Excellent', 'Good', 'Fair'].map((condition) => (
                        <div className="flex items-center space-x-2" key={condition}>
                          <Checkbox id={condition.toLowerCase()} />
                          <Label htmlFor={condition.toLowerCase()}>{condition}</Label>
                        </div>
                      ))} */}
                    </div>
                    <div>
                      <h4 className="mb-2 font-medium">Price Range</h4>
                      <Slider defaultValue={[0, 100]} max={200} step={1} />
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>$0</span>
                        <span>$200+</span>
                      </div>
                    </div>
                  </div>
                </div>
                <Button className="w-full">Apply Filters</Button>
              </div>
            </div>

            {/* Mobile Filters */}
            <div className="md:hidden">
              <div className="flex items-center justify-between">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="sm">
                      <FiFilter className="mr-2 h-4 w-4" /> Filters
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left">
                    <SheetHeader>
                      <SheetTitle>Filters</SheetTitle>
                      <SheetDescription>Narrow down your search results</SheetDescription>
                    </SheetHeader>
                    <div className="mt-6 space-y-6">
                      {/* <div>
                        <h4 className="mb-2 font-medium">Condition</h4>
                        {['Like New', 'Excellent', 'Good', 'Fair'].map((condition) => (
                          <div className="flex items-center space-x-2" key={condition}>
                            <Checkbox id={`mobile-${condition.toLowerCase()}`} />
                            <Label htmlFor={`mobile-${condition.toLowerCase()}`}>{condition}</Label>
                          </div>
                        ))}
                      </div> */}
                      <FilterSidebar/>
                      <div>
                        <h4 className="mb-2 font-medium">Price Range</h4>
                        <Slider defaultValue={[0, 100]} max={200} step={1} />
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <span>$0</span>
                          <span>$200+</span>
                        </div>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by: Newest" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="popular">Most Popular</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Items Display */}
            <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {data.items.map((item) => (
                <Card key={item.id} className="hover:shadow-md">
                  <CardContent className="p-4 space-y-2">
                    <div className="h-40 bg-gray-200 rounded-md" />
                    <div className="text-lg font-semibold">{item.title}</div>
                    <div className="text-sm text-muted-foreground">Condition: {item.condition}</div>
                    <div className="text-blue-600 font-bold">${item.price}</div>
                    <Badge className="w-fit">#{data.title}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
