import { trigger, animate, transition, style, query } from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
    // The '* => *' will trigger the animation to change between any two states
    transition('* => *', [
        // css styles at start of transition
        style({ opacity: 0 }),

        // animation and styles at end of transition
        animate('.5s', style({ opacity: 1 })),
    ])
]);

export const fadeAnimation2 = trigger('fadeAnimation2', [
    // The '* => *' will trigger the animation to change between any two states
    transition('void => *', [
        // css styles at start of transition
        style({ opacity: 0 }),

        // animation and styles at end of transition
        animate('.5s', style({ opacity: 1 })),
    ])
]);