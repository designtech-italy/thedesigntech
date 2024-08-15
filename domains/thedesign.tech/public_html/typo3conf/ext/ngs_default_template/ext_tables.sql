#
# Add SQL definition of database tables
#
CREATE TABLE pages (
                       identifier varchar(255) DEFAULT '' NOT NULL,
                       page_nav_mask_id varchar(255) DEFAULT '' NOT NULL,
                       target_content varchar(255) DEFAULT '' NOT NULL
);
