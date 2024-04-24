import { userStore } from '$lib/store/user';



// 所有的早起床都是為了懶惰

// 是比較辛苦，但是可以早些休息

export async function load(event) {
	console.log(event.locals.user, 'yser 是什麼');
    // 看看這裡能不能做到userStore.reset
	userStore.init(event.locals.user);
}


// 如果是得的話， 正常應該是可以接受道德