// name = [45, 67, 76, 67, 66, 7, ];

// for (let i = 0; i < name.length; i++) {
//     const element = name[i];
//     // console.log(element * 2)
//     if (element % 2 == 0) {
//         console.log(element, "this is jor sonka")
//     } else {
//         console.log(element * 2, "this is jor sonka")
//     }

// }


function jorsonka(nums) {

    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];

        if (element % 2 == 0) {
            console.log(element, "this is jor sonka")
        } else {
            console.log(element * 2, "this have a bujor sonka")
        }
    }

}

nums = [34, 56, 66, 65, 6, 5, 66, 5, 56, 5];
jorsonka(nums)