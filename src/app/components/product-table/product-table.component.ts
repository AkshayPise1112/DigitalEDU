import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-table',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent {

  productForm: FormGroup;
  products: Product[] = [];
  editMode = false;
  currentId = 1;

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(1)]],
      category: ['', Validators.required]
    });
  }

  addProduct() {
    if (this.productForm.invalid) return;

    this.products.push({
      id: this.currentId++,
      ...this.productForm.value
    });

    this.productForm.reset();
  }

  editProduct(product: Product) {
    this.editMode = true;
    this.currentId = product.id;
    this.productForm.patchValue(product);
  }

  updateProduct() {
    const index = this.products.findIndex(p => p.id === this.currentId);
    if (index !== -1) {
      this.products[index] = { id: this.currentId, ...this.productForm.value };
    }
    this.cancelEdit();
  }

  deleteProduct(id: number) {
    this.products = this.products.filter(p => p.id !== id);
  }

  cancelEdit() {
    this.editMode = false;
    this.productForm.reset();
  }
}
