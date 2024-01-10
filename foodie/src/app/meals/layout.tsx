import * as React from 'react';

type Props = {

};
export default function MealsLayout({children}: { children: React.ReactNode}) {
    return (
        <>
            <p>Meals layout</p>
            {children}
        </>
    );
};