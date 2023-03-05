import React from 'react'
import { PageHero } from '../components'

const HistoryPage = () => {
    React.useEffect(() => {
        document.title = "History"
    }, []);

    return (
        <main>
            <PageHero title="history" />
        </main>
    )
}

export default HistoryPage