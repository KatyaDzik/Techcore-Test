
export default class CardEntity {
    location_name = ""
    workweek =[]
    quota_base = ""
    year_start=""
    day_start=""
    isExpiryDate=true;
    week_start=""
    time_zone=""
    users = []
    isDefault = false

    constructor(location, work_week, quotabase, year_start,day_start, isExpiryDate, weekStart, time_zone, users, isDefault ) {
        this.location_name = location;
        this.workweek = work_week;
        this.quota_base= quotabase;
        this.year_start=year_start;
        this.day_start=day_start;
        this.isExpiryDate=isExpiryDate;
        this.week_start = weekStart;
        this.time_zone = time_zone;
        this.users= users;
        this.isDefault = isDefault;
    }


}

