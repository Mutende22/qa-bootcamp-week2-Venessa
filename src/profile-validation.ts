type UserProfile = {
    id: number;
    username: string;
    settings?: {
        notifications?: boolean;
    };
};

let userProfile1: UserProfile = {
    id: 1,
    username: "Catherine",
    settings: {
        notifications: true
    }
};

let userProfile2: UserProfile = {
    id: 2,
    username: "Joseph"
};

let userProfile3: UserProfile = {
    id: 3,
    username: "Victoria",
    settings: {
        notifications: false
    }
};

function isNotified(user: UserProfile): boolean {
    if (user.settings?.notifications === undefined) {
        return false;
    }

    return user.settings.notifications;
}

console.log(isNotified(userProfile1)); // true
console.log(isNotified(userProfile2)); // false
console.log(isNotified(userProfile3)); // false