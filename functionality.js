import activities from './activities.json' assert {type: 'json'};


export async function showActivities() {
    return activities;
};

export async function addActivities(activity) {
    activities.data.push(activity);
    return activities;
}

// export async function deleteActivity(Activity.id) {
//     activities.data.()
// }
