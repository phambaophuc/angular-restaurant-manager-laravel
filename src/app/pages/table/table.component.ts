import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TableService } from 'src/app/services/table.service';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
    displayedColumns: string[] = ['id', 'name', 'numberOfSeats', 'status', 'actions'];

    dataSource!: MatTableDataSource<any>;

    constructor(
        private tableService: TableService,
        private _liveAnnouncer: LiveAnnouncer
    ) { }

    ngOnInit(): void {
        this.getTables();
    }

    getTables() {
        this.tableService.getAllTables().subscribe((data: any) => {
            this.dataSource = new MatTableDataSource(data.tables);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        });
    }

    getStatusTranslation(status: string): string {
        const translations: StatusTranslations = {
            'available': 'Bỏ Trống',
            'reserved': 'Đặt trước',
            'occupied': 'Đang sử dụng'
        };

        return translations[status.toLowerCase()] || status;
    }

    announceSortChange(sortState: Sort) {
        if (sortState.direction) {
            this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
        } else {
            this._liveAnnouncer.announce('Sorting cleared');
        }
    }
}

interface StatusTranslations {
    available: string;
    reserved: string;
    occupied: string;
    [key: string]: string;
}
