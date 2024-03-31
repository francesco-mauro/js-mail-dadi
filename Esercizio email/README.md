
## Struttura della Pagina
1. Campo di Input per l'Email: Aggiungi un campo di input dove gli utenti possono inserire la loro email. 
2. Pulsante di Verifica: Inserisci un pulsante che gli utenti possono cliccare per verificare se la loro email è nella lista delle email autorizzate.
3. Messaggio di Esito: dove verrà visualizzato un messaggio che indica se l'accesso è consentito o negato.

## Logica 
1. Lista delle Email Autorizzate: Crea un elenco (array) di email che sono autorizzate ad accedere.
2Recupero dell'Email Inserita: Quando il pulsante viene cliccato, leggi l'email inserita dall'utente nel campo di input.
3. Controllo dell'Email: Usa un ciclo per scorrere l'elenco delle email autorizzate e controlla se l'email inserita dall'utente corrisponde a una di queste.
4. Se trovi una corrispondenza, imposta una variabile per indicare che l'email è autorizzata.
5. e il ciclo termina senza trovare corrispondenze, l'email non è autorizzata.
Visualizzazione del Risultato: Mostra un messaggio appropriato all'utente nell'area del messaggio di esito, a seconda del risultato del controllo.
