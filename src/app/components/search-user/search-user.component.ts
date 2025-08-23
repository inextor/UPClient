import { Component, EventEmitter, Output, OnDestroy } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Subject, debounceTime, distinctUntilChanged, Subscription } from 'rxjs';

@Component({
  selector: 'app-search-user',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './search-user.component.html',
  styleUrl: './search-user.component.css'
})
export class SearchUserComponent implements OnDestroy {
  searchTerm: string = '';
  searchResults: any[] = [];
  private searchTerms = new Subject<string>();
  private searchSubscription: Subscription;

  @Output() userSelected = new EventEmitter<any>();

  constructor(private restService: RestService) {
    this.searchSubscription = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(term => {
      this.searchUsers(term);
    });
  }

  onSearchTermChange(): void {
    this.searchTerms.next(this.searchTerm);
  }

  async searchUsers(name: string): Promise<void> {
    if (name.trim() === '') {
      this.searchResults = [];
      return;
    }
    try {
      const response = await this.restService.get('/user.php', { name: `~~${name}` });
      this.searchResults = response.data;
    } catch (error) {
      console.error('Error searching users:', error);
      this.searchResults = [];
    }
  }

  onSelectUser(user: any): void {
    this.userSelected.emit(user);
    this.searchResults = []; // Clear results after selection
    this.searchTerm = ''; // Clear search term after selection
  }

  ngOnDestroy(): void {
    this.searchSubscription.unsubscribe();
  }
}