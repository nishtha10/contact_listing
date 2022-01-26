import { ConfirmationComponent } from '../components/confirmation/confirmation.component';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/core/services/contact.service';
import { ContactModel } from 'src/app/core/model/contact.model';
import { AppConstant } from 'src/app/core/constant/app-constant';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss'],
})
export class TableListComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'email',
    'image',
    'action',
  ];
  selectOption = AppConstant.SelectOption;
  dataSource: MatTableDataSource<ContactModel>;
  tableList: any;
  unSubscribeAll: Subject<void> = new Subject();
  constructor(
    private contactService: ContactService,
    private matDialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getTableData();
  }

  getTableData(): void {
    this.contactService
      .getContactList()
      .pipe(takeUntil(this.unSubscribeAll))
      .subscribe((res) => {
        this.dataSource = new MatTableDataSource<ContactModel>(res.data);
        this.tableList = this.dataSource.filteredData;
        console.log(this.dataSource, 'dataSource');
      });
  }

  addData(): void {
    this.router.navigate(['/add-contact']);
  }

  deleteData(index): void {
    const dialogRef = this.matDialog.open(ConfirmationComponent, {
      width: '500',
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result, 'res');
      if (result) {
        // integrate delete api here for table data delete
      }
    });
  }

  onSelectionChange(data): void {
    if (data.value === 'a-z') {
      const array = this.tableList.sort((a, b) => {
        const nameA = a.first_name.toLowerCase();
        const nameB = b.first_name.toLowerCase();
        if (nameA > nameB) {
          return 1;
        }
        if (nameA < nameB) {
          return -1;
        }
        return 0;
      });
      this.dataSource = array;
    } else {
      const array = this.tableList.sort((b, a) => {
        const nameA = a.first_name.toLowerCase();
        const nameB = b.first_name.toLowerCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
      this.dataSource = array;
    }
  }

  ngOnDestroy(): void {
    if (this.unSubscribeAll) {
      this.unSubscribeAll.next();
      this.unSubscribeAll.complete();
    }
  }
}
