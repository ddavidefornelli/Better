import sqlite3
import asyncio
import aiohttp


async def connesione_website(url):
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as result:
            return await result.text()

async def main():
    conn = sqlite3.connect("peppino.db")
    try:
        cursor = conn.cursor()
        cursor.execute("CREATE TABLE IF NOT EXISTS Sfide (scopo VARCHAR(100), nome_sfida VARCHAR(100), id_sfida INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT);")
        cursor.execute("CREATE TABLE IF NOT EXISTS Gruppi (nome_gruppo VARCHAR(100), data_inizio DATE, id_gruppo INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, cod_sfida INTEGER, FOREIGN KEY (cod_sfida) REFERENCES Sfide(id_sfida));")
        cursor.execute("CREATE TABLE IF NOT EXISTS Utenti (username VARCHAR(100), password VARCHAR(100), id_utente INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT);")
        cursor.execute("CREATE TABLE IF NOT EXISTS Utenti_Gruppi (cod_utente INTEGER, cod_gruppo INTEGER, PRIMARY KEY (cod_utente, cod_gruppo), FOREIGN KEY (cod_utente) REFERENCES Utenti(id_utente), FOREIGN KEY (cod_gruppo) REFERENCES Gruppi(id_gruppo));")
        url = "http:localhost:5173/login"
        ris = await connesione_website(url)
        print(ris)

    except sqlite3.Error as e:
        print("Errore: ", e)


if __name__ == "__main__":
    asyncio.run(main())






