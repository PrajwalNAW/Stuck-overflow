import React from 'react'
import Widget from './Widget'
import WidgetTags from './WidgetTags'
import './RightSidebar.css'

const RightSidebar = () => {
    return (
        <section className="right-sidebar">
            <Widget />
            <WidgetTags />
        </section>
    )
}

export default RightSidebar
