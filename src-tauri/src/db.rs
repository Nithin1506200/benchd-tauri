use tauri_plugin_sql::{Migration, MigrationKind};

pub fn get_migration() -> Vec<tauri_plugin_sql::Migration> {
    let migration_v1: tauri_plugin_sql::Migration =
    // Define your migrations here
    Migration {
        version: 1,
        description: "create_initial_tables",
        sql: "CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT);",
        kind: MigrationKind::Up,
    };
    vec![migration_v1.into()]
}
