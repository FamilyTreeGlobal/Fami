import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Router } from '@angular/router';
import { USER_DATA } from '../app/common/user';

//declare var jQuery: any;

export class BaseService {
	protected baseURL: string = '';
	private isErrorOccured: boolean = false;
	private serviceCount: number = 0;
	constructor(private http: Http) {
		if (window.location.hostname == 'localhost') {
			this.baseURL = 'http://localhost:4000/';
		}
		else {
			this.baseURL = window.location.protocol + '//' + window.location.hostname + '/services/api/';
		}
	}
	protected get(url: string, isNoLoadingPanel?: boolean): any {
		var headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        headers.set('authentication', 'Bearer ' + USER_DATA.token);
		return this.http.get(this.baseURL + url, { search: '', headers: headers })
			.map(res => {
				this.hideLoadingPanel();
				return res.json();
			})
			.catch(err => {
				this.hideLoadingPanel();
				return Observable.throw(err.json())
			});
	}

	protected post(url: string, data: any, isNoLoadingPanel?: boolean): any {
		let options: RequestOptions;
		return this.http.post(this.baseURL + url, JSON.stringify(data), this.getOptions(isNoLoadingPanel))
			.map(res => {
				this.hideLoadingPanel();
				return res.json();
			})
			.catch(err => {
				this.hideLoadingPanel();
				return Observable.throw(err.json())
			});
	}
	protected put(url: string, data: any, isNoLoadingPanel?: boolean): any {
		let options: RequestOptions;
		return this.http.put(this.baseURL + url, JSON.stringify(data), this.getOptions(isNoLoadingPanel))
			.map(res => {
				this.hideLoadingPanel();
				return res.json();
			})
			.catch(err => {
				this.hideLoadingPanel();
				return Observable.throw(err.json())
			});
	}
	protected delete(url: string, isNoLoadingPanel?: boolean): any {
		let options: RequestOptions;
		return this.http.delete(this.baseURL + url, this.getOptions(isNoLoadingPanel))
			.map(res => {
				this.hideLoadingPanel();
				return res.json();
			})
			.catch(err => {
				this.hideLoadingPanel();
				return Observable.throw(err.json())
			});
	}
	private getOptions(isNoLoadingPanel: boolean): RequestOptions {
		this.showLoadingPanel(isNoLoadingPanel);
		let options: RequestOptions;
		var token = localStorage.getItem('token');
		let headers = new Headers({ 'Content-Type': 'application/json', 'session-id': token });
		options = new RequestOptions({ headers: headers });
		return options;
	}

	private handleError(error: any) {
		let errMsg = (error.message) ? error.message :
			error.status ? `${error.status} - ${error.statusText}` : 'Server error';
		if (this.isErrorOccured == false) {
			this.logError(errMsg);
		}
		return null;
	}
	public logError(errMsg: any) {
		this.isErrorOccured = true;
		var errInfo: any = {};
		errInfo.message = errMsg.toString();
		errInfo.type = "Error";
		this.post('Log/LogError', errInfo).subscribe(status => {
			this.isErrorOccured = false;
		});
	}
	private showLoadingPanel(isNoLoadingPanel: boolean) {
		this.serviceCount++;
		/*if (!isNoLoadingPanel)
			jQuery('#loading-Collabrity').show();*/
	}
	private hideLoadingPanel() {
		this.serviceCount--;
		/*if (this.serviceCount <= 0)
			jQuery('#loading-Collabrity').hide();*/
	}
}