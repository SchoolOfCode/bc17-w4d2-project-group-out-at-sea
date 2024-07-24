import activities from './activities.json' with {type: 'json'};


export async function showActivities() {
    return activities;
};

export async function addActivities(activity) {
    activities.push(activity);
    return activities;
}
