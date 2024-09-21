import { Component, OnInit } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  merchantId: number;
  occasionId: number;
  gender: string; // Add gender property for filtering
}

interface Occasion {
  id: number;
  name: string;
}

interface Gender {
  id: number;
  name: string;
}

interface Price {
  id: number;
  name: string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  occasions: Occasion[] = [];
  genders: Gender[] = [];
  prices: Price[] = [];
  

  selectedOccasionIds: number[] = [];
  isPopupVisible = false; // To control popup visibility
  selectedProduct?: Product; // To hold the currently selected product

  // New properties for managing filter visibility
  showOccasionList = false;
  showGenderList = false;
  showPriceList = false;

  // Active states for buttons
  activeOccasions: number[] = [];
  activeGenders: string[] = []; // Active genders
  activePrices: string[] = []; // Active prices
  
  constructor() {}

  ngOnInit(): void {
    this.loadDummyData();
    this.loadOccasions();
    this.selectedOccasionIds = []; // Reset to show all products initially
    this.products.forEach(product => this.selectedOccasionIds.push(product.occasionId));
  }

  loadDummyData(): void {
    this.products = [
      { id: 1, name: "Product 1", price: 10.99, description: "Description of Product 1", imageUrl: "https://via.placeholder.com/150", merchantId: 1, occasionId: 1, gender: "Male" },
      { id: 2, name: "Product 2", price: 15.50, description: "Description of Product 2", imageUrl: "https://via.placeholder.com/150", merchantId: 2, occasionId: 2, gender: "Female" },
      { id: 3, name: "Product 3", price: 8.75, description: "Description of Product 3", imageUrl: "https://via.placeholder.com/150", merchantId: 1, occasionId: 1, gender: "Male" },
      { id: 4, name: "Product 4", price: 20.00, description: "Description of Product 4", imageUrl: "https://via.placeholder.com/150", merchantId: 3, occasionId: 3, gender: "Female" },
    ];
}

loadOccasions(): void {
    this.occasions = [
      { id: 1, name: "Occasion A" },
      { id: 2, name: "Occasion B" },
      { id: 3, name: "Occasion C" },
      { id: 3, name: "Occasion C" },
      { id: 3, name: "Occasion C" },
      { id: 3, name: "Occasion C" },
      { id: 3, name: "Occasion C" },
      { id: 3, name: "Occasion C" },
      { id: 3, name: "Occasion C" },
      { id: 3, name: "Occasion C" },
      { id: 3, name: "Occasion C" },
      { id: 3, name: "Occasion C" },
      { id: 3, name: "Occasion C" },
      { id: 3, name: "Occasion C" },
      { id: 3, name: "Occasion C" },
      { id: 3, name: "Occasion C" },
      // Add more occasions as needed
    ];

    this.genders = [
      { id: 1, name: "Male" },
      { id: 1, name: "Female" }
    ]

    this.prices = [
      { id: 1, name: "Price A" },
      { id: 1, name: "Price A" },
      { id: 1, name: "Price A" },
    ]
}

toggleOccasion(occasionId:number): void {
    const index = this.selectedOccasionIds.indexOf(occasionId);
    if (index > -1) {
        this.selectedOccasionIds.splice(index, 1);
        this.activeOccasions.splice(this.activeOccasions.indexOf(occasionId), 1); // Remove from active occasions
    } else {
        this.selectedOccasionIds.push(occasionId);
        this.activeOccasions.push(occasionId); // Add to active occasions
    }
}

// New toggle methods for gender and price
toggleGender(gender:string): void {
    const index = this.activeGenders.indexOf(gender);
    if (index > -1) {
        this.activeGenders.splice(index, 1); // Remove from active genders
    } else {
        this.activeGenders.push(gender); // Add to active genders
    }
}

togglePrice(price:string): void {
    const index = this.activePrices.indexOf(price);
    if (index > -1) {
        this.activePrices.splice(index, 1); // Remove from active prices
    } else {
        this.activePrices.push(price); // Add to active prices
    }
}

isProductVisible(product : Product): boolean { 
    return this.selectedOccasionIds.includes(product.occasionId);
}

showFilterPopup(): void {
    this.isPopupVisible = !this.isPopupVisible; 
}

selectProduct(product : Product): void { 
    this.selectedProduct = product; 
    document.body.style.overflow = 'hidden'; 
}

closeSidebar(): void {
    this.selectedProduct = undefined; 
    document.body.style.overflow = 'auto'; 
}

// New methods to handle button clicks
toggleOccasionsList(): void {
    this.showOccasionList = !this.showOccasionList;
    this.showGenderList = false; 
    this.showPriceList = false; 
}

toggleGenderList(): void {
    this.showGenderList = !this.showGenderList;
    this.showOccasionList = false; 
    this.showPriceList = false; 
}

togglePriceList(): void {
    this.showPriceList = !this.showPriceList;
    this.showOccasionList = false; 
    this.showGenderList = false; 
}

reset(): void {

}

save(): void {

}
}