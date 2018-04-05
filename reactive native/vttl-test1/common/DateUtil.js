

export default class DateUtil {

    static daysOfWeek = ['Zo', 'Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za' ] ;

    static dayOfTheWeek(dayInt) {
        return DateUtil.daysOfWeek[dayInt];
    }
}