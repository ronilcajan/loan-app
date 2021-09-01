$(document).ready(function(){

    $('#borrowersTable').DataTable();
    
    $('#btransTable').DataTable({
        "order": [[ 0, "desc" ]],
    });
    $('#bloanTable').DataTable({
        "order": [[ 5, "asc" ]],
    });
    $('#transactionTable').DataTable({
        "order": [[ 0, "desc" ]],
    });
    $('#loanTable').DataTable({
        "order": [[ 8, "asc" ]],
    });
})