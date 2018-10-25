import { Pipe, PipeTransform } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Pipe({ name: "limitTo" })
export class TruncatePipe implements PipeTransform {
  transform(value: string, args: string): string {
    let limit = args ? parseInt(args, 10) : 10;
    let trail = "...";
    return value.length > limit ? value.substring(0, limit) + trail : value;
  }
}

@Pipe({ name: "fetch", pure: false })
export class FetchPipe implements PipeTransform {
  private cachedData: any = null;
  private cachedUrl = "";
  constructor(private http: HttpClient) {}
  transform(url: string): any {
    if (url !== this.cachedUrl) {
      this.cachedData = null;
      this.cachedUrl = url;
      this.http.get(url).subscribe(result => {
        this.cachedData = result;
      });
    }

    return this.cachedData;
  }
}
