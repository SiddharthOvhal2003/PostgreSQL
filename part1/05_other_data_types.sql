DROP TABLE IF EXISTS basics.app events;

CREATE TABLE basics.app_events(
    -- UUID - Universally Unique Identifier data type
    -- UUID is a 128-bit number used to identify information in computer systems
    --gen_random_uuid() - generates a random UUID

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    event_name TEXT NOT NULL,

    --JSONB
    -- JSONB is a binary format of JSON data, it is more efficient than JSON data type
    -- :: is PostgreSQL's type-casting operator.
    --{} is an empty JSON object, and '{}'::JSONB is a way to cast that empty JSON object to the JSONB data type.   
    metadata JSONB DEFAULT '{}'::JSONB,

    created_at TIMESTAMP DEFAULT NOW()

);

INSERT INTO basics.app_events (event_name, metadata)
VALUES
(
    'Signup',
    '{"browser":"chrome"}'
),
(
    'Login',
    '{"browser":"firefox"}'
),
(
    'Purchase',
    '{"browser":"safari"}'
);

SELECT * FROM basics.app_events;


--metadata->>'browser' is a way to extract the value of the "browser" key from the metadata JSONB column. The ->> operator is used to extract the value as text.
-- ?  is a JSONB containment operator that checks if the left JSONB value contains the right JSONB value. In this case, it checks if the metadata column contains the key "browser".

SELECT event_name,
metadata->>'browser' AS browser
FROM basics.app_events
WHERE metadata ? 'browser';


