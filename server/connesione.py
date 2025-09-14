import sqlite3

conn = sqlite3.connect("peppino.db")

try:
    cursor = conn.cursor()
    cursor.execute("CREATE TABLE IF NOT EXISTS Sfide (scopo VARCHAR(100), nome_sfida VARCHAR(100), id_sfida INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT);")
    cursor.execute("CREATE TABLE IF NOT EXISTS Gruppi (nome_gruppo VARCHAR(100), data_inizio DATE, id_gruppo INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, cod_sfida INTEGER, FOREIGN KEY (cod_sfida) REFERENCES Sfide(id_sfida));")
    cursor.execute("CREATE TABLE IF NOT EXISTS Utenti (nome VARCHAR(100), cognome VARCHAR(100), id_utente INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT);")
    cursor.execute("CREATE TABLE IF NOT EXISTS Utenti_Gruppi (cod_utente INTEGER, cod_gruppo INTEGER, PRIMARY KEY (cod_utente, cod_gruppo), FOREIGN KEY (cod_utente) REFERENCES Utenti(id_utente), FOREIGN KEY (cod_gruppo) REFERENCES Gruppi(id_gruppo));")

except sqlite3.Error as e:
    print("Errore: ", e)

    
