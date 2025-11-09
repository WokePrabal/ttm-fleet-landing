$groups = git ls-files src | Group-Object { $_.ToLower() } | Where-Object { $_.Count -gt 1 }
if (-not $groups) { Write-Output "No duplicates found"; exit 0 }
foreach ($g in $groups) {
  $files = $g.Group
  $keep = $files | Where-Object { ([IO.Path]::GetFileName($_) -cmatch '^[A-Z]') } | Select-Object -First 1
  if (-not $keep) { $keep = $files[0] }
  Write-Output "Keeping: $keep"
  foreach ($f in $files) {
    if ($f -ne $keep) {
      Write-Output "Removing: $f"
      Remove-Item -Force -LiteralPath $f
    }
  }
}
