import { Routes } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MatchesPageComponent } from './matches-page/matches-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { MessagesPageComponent } from './messages-page/messages-page.component';
import { FriendsPageComponent } from './friends-page/friends-page.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { QuizPageComponent } from './quiz-page/quiz-page.component';

export const routes: Routes = [
    {
        path: '',
        component: LandingPageComponent,
        title: 'Landing Page'
    },
    {
        path: 'home',
        component: HomePageComponent,
        title: 'Home Page'
    },
    {
        path: 'matches',
        component: MatchesPageComponent,
        title: 'Matches Page'
    },
    {
        path: 'search',
        component: SearchPageComponent,
        title: 'Search Page'
    },
    {
        path: 'profile',
        component: ProfilePageComponent,
        title: 'Profile Page'
    },
    {
        path: 'messages',
        component: MessagesPageComponent,
        title: 'Messages Page'
    },
    {
        path: 'friends',
        component: FriendsPageComponent,
        title: 'Friends Page'
    },
    {
        path: 'settings',
        component: SettingsPageComponent,
        title: 'Settings Page'
    },
    {
        path: 'quiz',
        component: QuizPageComponent,
        title: 'Quiz Page'
    }
];
